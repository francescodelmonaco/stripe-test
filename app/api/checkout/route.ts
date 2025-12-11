import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-11-20.acacia' as Stripe.LatestApiVersion,
});

export async function POST(req: NextRequest) {
    try {
        const { amount } = await req.json();

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: 'Test Product',
                        },
                        unit_amount: amount, // in centesimi (1000 = 10€)
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.get('origin')}/cancel`,
        });

        return NextResponse.json({ sessionId: session.id, url: session.url });
    } catch (error) {
        return NextResponse.json({ error: 'Errore nel checkout' }, { status: 500 });
    }
}