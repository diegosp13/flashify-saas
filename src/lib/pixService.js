export async function generatePixPayment(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        payment_id: `pay_${Date.now()}`,
        amount: 29.90,
        qr_code_url: 'https://fake-qr-code.com/pix ',
        copy_and_paste_code: '00020126580014BR.GOV.BCB.PIX0136a123b456c789d0e1f2a3b4c5d6e7020829901180503***2550212123456789010520400005303986540529.905802BR5915NOME DO USUARIO6009SAO PAULO62070503***6304E234',
        email_key: 'dgosp13@gmail.com'
      });
    }, 1000);
  });
}

export async function completePaymentAndUpdatePlan(userId, planType = 'monthly') {
  await supabase.from('user_plans').update({
    plan_type: 'premium',
    plan_interval: planType,
    variations_used_today: 9999
  }).eq('user_id', userId);

  await supabase.from('transactions').insert({
    user_id: userId,
    amount: planType === 'monthly' ? 29.90 : 299.00,
    payment_method: 'pix',
    status: 'paid',
    paid_at: new Date().toISOString()
  });
}
