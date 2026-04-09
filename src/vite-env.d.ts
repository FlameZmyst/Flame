/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Chave anon JWT (eyJ…); recomendada se sb_publishable_ falhar nas Edge Functions. */
  readonly VITE_SUPABASE_ANON_KEY?: string;
  /** URL do stream (opcional). Se vazio, o admin usa stream padrão SomaFM Groove Salad. */
  readonly VITE_LIVE_RADIO_STREAM_URL?: string;
  /** Rótulo do player (opcional). */
  readonly VITE_LIVE_RADIO_TITLE?: string;
}
