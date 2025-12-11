# Stripe Test con Next.js

Test di integrazione Stripe con Next.js 16 e TypeScript.

## Setup

1. Clona la repo
2. `npm install`
3. Copia `.env.example` in `.env`
4. Inserisci le tue chiavi Stripe (modalità test)
5. `npm run dev`

## Testare i pagamenti

1. Numero carte di test Stripe:
- **Successo**: 4242 4242 4242 4242
- **Fallimento**: 4000 0000 0000 0002
2. CVC: qualsiasi numero di 3 cifre    
3. Data: qualsiasi data futura