import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Password } from 'primeng/password';
import { Select } from 'primeng/select';
import { UserService, User } from '../../services/user';
import { RoleService } from '../../services/role';
import { SedeService } from '../../services/sede';
import { EdificioService } from '../../services/edificio';
import { MessageService } from 'primeng/api';
import { AppButtonComponent } from '../../../../../shared/components/app-button/app-button';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    Password,
    Select,
    AppButtonComponent
  ],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm implements OnInit, OnChanges {
  @Input() visible = false;
  @Input() user: User | null = null;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() formSubmit = new EventEmitter<void>();

  userForm!: FormGroup;
  roles: any[] = [];
  sedes: any[] = [];
  edificios: any[] = [];
  identifierTypes = [
    { label: 'DNI', value: 'dni' },
    { label: 'Email', value: 'email' }
  ];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private roleService: RoleService,
    private sedeService: SedeService,
    private edificioService: EdificioService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadRoles();
    this.loadSedes();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible'] && this.visible && this.userForm) {
      this.updateForm();
    }

    if (changes['user'] && this.userForm) {
      this.updateForm();
    }
  }

  initForm() {
    this.userForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      identifier: ['', [Validators.required, this.identifierValidator.bind(this)]],
      identifierType: ['email', Validators.required],
      clave: ['', [Validators.required, Validators.minLength(6)]],
      roleId: ['', Validators.required],
      sedeId: [''],
      edificioId: [''],
      telefono: ['']
    });

    // Listener para revalidar el identifier cuando cambia el tipo
    this.userForm.get('identifierType')?.valueChanges.subscribe(() => {
      // Limpiar el campo identifier cuando cambia el tipo
      this.userForm.get('identifier')?.setValue('');
      this.userForm.get('identifier')?.updateValueAndValidity();
    });
  }

  // Validador personalizado para identifier (DNI o Email)
  identifierValidator(control: any) {
    if (!control.value) {
      return null;
    }

    const identifierType = this.userForm?.get('identifierType')?.value;

    if (identifierType === 'email') {
      // Validar email
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = emailPattern.test(control.value);

      if (!isValid) {
        return { invalidEmail: true };
      }

      // Convertir a minúsculas automáticamente
      if (control.value !== control.value.toLowerCase()) {
        control.setValue(control.value.toLowerCase(), { emitEvent: false });
      }

      return null;
    } else if (identifierType === 'dni') {
      // Validar DNI (exactamente 8 dígitos por ley)
      const dniPattern = /^[0-9]{8}$/;
      return dniPattern.test(control.value) ? null : { invalidDni: true };
    }

    return null;
  }

  updateForm() {
    if (this.user) {
      // Si hay un usuario para editar, cargar sus datos
      this.userForm.patchValue({
        nombres: this.user.nombres,
        apellidos: this.user.apellidos,
        identifier: this.user.identifier,
        identifierType: this.user.identifierType,
        roleId: this.user.roleId,
        sedeId: this.user.sedeId,
        edificioId: this.user.edificioId,
        telefono: this.user.telefono
      });
      // La contraseña no es requerida al editar
      this.userForm.get('clave')?.clearValidators();
      this.userForm.get('clave')?.updateValueAndValidity();

      // Cargar edificios si hay sede seleccionada
      if (this.user.sedeId) {
        this.edificioService.getEdificios(this.user.sedeId).subscribe({
          next: (edificios) => {
            this.edificios = edificios.map(e => ({ label: e.nombre, value: e.id }));
          }
        });
      }
    } else {
      // Nuevo usuario - resetear formulario y hacer la contraseña requerida
      this.userForm.reset({
        identifierType: 'email'
      });
      this.userForm.get('clave')?.setValidators([Validators.required, Validators.minLength(6)]);
      this.userForm.get('clave')?.updateValueAndValidity();
      this.edificios = [];
    }
  }

  loadRoles() {
    this.roleService.getRoles().subscribe({
      next: (roles) => {
        this.roles = roles.map(r => ({ label: r.nombre, value: r.id }));
      },
      error: (error) => {
        console.error('Error loading roles:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudieron cargar los roles'
        });
      }
    });
  }

  loadSedes() {
    this.sedeService.getSedes().subscribe({
      next: (sedes) => {
        this.sedes = sedes.map(s => ({ label: s.nombre, value: s.id }));
      },
      error: (error) => {
        console.error('Error loading sedes:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudieron cargar las sedes'
        });
      }
    });
  }

  onSedeChange(event: any) {
    const sedeId = event.value;
    if (sedeId) {
      this.edificioService.getEdificios(sedeId).subscribe({
        next: (edificios) => {
          this.edificios = edificios.map(e => ({ label: e.nombre, value: e.id }));
        },
        error: (error) => {
          console.error('Error loading edificios:', error);
        }
      });
    } else {
      this.edificios = [];
      this.userForm.patchValue({ edificioId: null });
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.loading = true;
      const formData = { ...this.userForm.value };

      // Si estamos editando un usuario, eliminar el campo 'clave' si está vacío
      if (this.user && (!formData.clave || formData.clave.trim() === '')) {
        delete formData.clave;
      }

      const request = this.user
        ? this.userService.updateUser(this.user.id, formData)
        : this.userService.createUser(formData);

      request.subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: `Usuario ${this.user ? 'actualizado' : 'creado'} correctamente`
          });
          this.loading = false;
          this.closeDialog();
          this.formSubmit.emit();
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error?.message || 'Error al guardar usuario'
          });
          this.loading = false;
        }
      });
    } else {
      Object.keys(this.userForm.controls).forEach(key => {
        this.userForm.get(key)?.markAsTouched();
      });
    }
  }

  closeDialog() {
    this.visible = false;
    this.visibleChange.emit(false);
    this.userForm.reset();
  }
}
