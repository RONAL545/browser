// particles.service.ts
import { Injectable } from '@angular/core';
import { tsParticles } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import { loadPolygonMaskPlugin } from '@tsparticles/plugin-polygon-mask';

@Injectable({
  providedIn: 'root'
})
export class ParticlesService {
  private particlesInitialized = false;

  constructor() {}

  async initializeParticlesEngine(): Promise<void> {
    if (this.particlesInitialized) return;

    try {
      await loadFull(tsParticles);
      await loadPolygonMaskPlugin(tsParticles);
      this.particlesInitialized = true;
    } catch (error) {
      throw error;
    }
  }

  async loadPolygonParticles(
    containerId: string,
    svgUrl: string,
    position: { x: number, y: number },
    scale: number = 1.2
  ): Promise<void> {
    const options = {
      detectRetina: true,
      resize: {
        enable: true,
        delay: 50
      },
      background: {
        color: { value: "transparent" },
      },
      fullScreen: {
        enable: false,
        zIndex: 0
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: "#4285f4",
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none" as const,
          random: false,
          straight: false,
          outModes: {
            default: "bounce" as const,
          },
        },
        number: {
          value: this.getParticleCount(),
          limit: {
            mode: "delete" as const,
            value: 60
          }
        },
        opacity: {
          value: 0.7,
        },
        size: {
          value: 2,
        },
        shape: {
          type: "circle",
        },
        links: {
          enable: true,
          color: "#4285f4",
          distance: 70,
          opacity: 0.5,
          width: 1,
        },
      },
      polygon: {
        draw: {
          enable: true,
          stroke: {
            color: { value: "#0e1bd6ff" },
            width: 1,
            opacity: 0.8
          },
        },
        enable: true,
        type: "inside" as const,
        move: {
          radius: 0,
          type: "path" as const
        },
        scale: scale,
        url: svgUrl,
        position: position,
      },
    };

    try {
      await tsParticles.load({
        id: containerId,
        options: options
      });
    } catch (error) {
      // Fallback sin polígono
      await this.loadSimpleParticles(containerId);
    }
  }

  async loadSimpleParticles(containerId: string): Promise<void> {
    const simpleOptions = {
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        color: { value: "#F4B41A" },
        move: { enable: true, speed: 0.5 },
        number: {
          value: this.getParticleCount(),
          limit: {
            mode: "delete" as const,
            value: 60
          }
        },
        opacity: { value: 0.7 },
        size: { value: 2 },
        shape: { type: "circle" },
        links: {
          enable: true,
          color: "#F4B41A",
          distance: 70,
          opacity: 0.5,
          width: 1,
        },
      },
    };

    try {
      await tsParticles.load({
        id: containerId,
        options: simpleOptions
      });
    } catch (error) {
      // Error silenciado en producción
    }
  }

  private getParticleCount(): number {
    const isSmallScreen = window.innerWidth <= 1024;
    return isSmallScreen ? 30 : 50;
  }

  private getResponsiveScale(): number {
    const isSmallScreen = window.innerWidth <= 1024;
    return isSmallScreen ? 0.6 : 1.2;
  }

  getResponsivePosition(desktopX: number, mobileX: number = 50, y: number = 50): { x: number, y: number } {
    const isSmallScreen = window.innerWidth <= 1024;
    return {
      x: isSmallScreen ? mobileX : desktopX,
      y: y
    };
  }

  destroyParticles(containerId?: string): void {
    try {
      if (containerId) {
        // Buscar contenedor específico por ID
        const containers = tsParticles.dom();
        for (let i = containers.length - 1; i >= 0; i--) {
          const container = containers[i];
          if (container && String(container.id) === containerId) {
            container.stop();
            container.destroy();
            break;
          }
        }
      } else {
        // Destruir todos los contenedores
        const containers = tsParticles.dom();
        for (let i = containers.length - 1; i >= 0; i--) {
          const container = containers[i];
          if (container) {
            container.stop();
            container.destroy();
          }
        }
      }
    } catch (error) {
      // Error silenciado en producción
    }
  }

  async refreshParticles(): Promise<void> {
    try {
      const container = tsParticles.domItem(0);
      if (container) {
        container.refresh();
      }
    } catch (error) {
      // Error silenciado en producción
    }
  }
}