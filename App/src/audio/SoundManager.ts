import { ISoundEmitter } from "./interfaces.js";

/**
 * SoundManager - Singleton registry for tracking and updating all sound emitters
 * Provides centralized management of HeartController, LungEmitter, GI sounds, etc.
 */
export class SoundManager {
  private static instance: SoundManager;
  private emitters: Map<string, ISoundEmitter> = new Map();

  private constructor() {}

  /**
   * Get the singleton instance
   */
  public static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  /**
   * Register a sound emitter
   * @param emitter - The emitter to register
   */
  public registerEmitter(emitter: ISoundEmitter): void {
    const id = emitter.getId();
    if (this.emitters.has(id)) {
      console.warn(
        `SoundManager: Emitter with id "${id}" already registered, replacing.`,
      );
    }
    this.emitters.set(id, emitter);
  }

  /**
   * Unregister a sound emitter by ID
   * @param id - The emitter's unique identifier
   */
  public unregisterEmitter(id: string): void {
    if (!this.emitters.delete(id)) {
      console.warn(`SoundManager: No emitter found with id "${id}"`);
    }
  }

  /**
   * Get an emitter by ID
   * @param id - The emitter's unique identifier
   */
  public getEmitter(id: string): ISoundEmitter | undefined {
    return this.emitters.get(id);
  }

  /**
   * Get all registered emitters
   */
  public getAllEmitters(): ISoundEmitter[] {
    return Array.from(this.emitters.values());
  }

  /**
   * Get all active emitters
   */
  public getActiveEmitters(): ISoundEmitter[] {
    return this.getAllEmitters().filter((emitter) => emitter.isActive());
  }

  /**
   * Update all registered emitters
   * @param deltaTime - Time since last frame in seconds
   */
  public updateAll(deltaTime: number): void {
    for (const emitter of this.emitters.values()) {
      emitter.update(deltaTime);
    }
  }

  /**
   * Start all registered emitters
   */
  public startAll(): void {
    for (const emitter of this.emitters.values()) {
      emitter.start();
    }
  }

  /**
   * Stop all registered emitters
   */
  public stopAll(): void {
    for (const emitter of this.emitters.values()) {
      emitter.stop();
    }
  }

  /**
   * Set volume for all registered emitters
   * @param volume - Volume level (0.0 to 1.0)
   */
  public setAllVolumes(volume: number): void {
    for (const emitter of this.emitters.values()) {
      emitter.setVolume(volume);
    }
  }

  /**
   * Check if any emitter is active
   */
  public hasActiveEmitters(): boolean {
    for (const emitter of this.emitters.values()) {
      if (emitter.isActive()) {
        return true;
      }
    }
    return false;
  }

  /**
   * Clear all registered emitters
   */
  public clear(): void {
    this.emitters.clear();
  }
}
