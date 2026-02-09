/**
 * ISoundEmitter - Interface for anything that emits sound
 * Implemented by HeartController, LungEmitter, GI sounds, etc.
 */
export interface ISoundEmitter {
  /**
   * Get unique identifier for this emitter
   */
  getId(): string;

  /**
   * Update the emitter - called each frame
   * @param deltaTime - Time since last frame in seconds
   */
  update(deltaTime: number): void;

  /**
   * Set the emitter's volume
   * @param volume - Volume level (0.0 to 1.0)
   */
  setVolume(volume: number): void;

  /**
   * Get the emitter's current volume
   */
  getVolume(): number;

  /**
   * Check if the emitter is currently active (producing or about to produce sound)
   */
  isActive(): boolean;

  /**
   * Start the emitter
   */
  start(): void;

  /**
   * Stop the emitter
   */
  stop(): void;
}
