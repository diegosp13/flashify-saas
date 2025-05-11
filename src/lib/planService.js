import { supabase } from './supabaseClient';

export async function checkUserPlan(userId) {
  const { data } = await supabase
    .from('user_plans')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (!data) {
    await supabase.from('user_plans').insert({
      user_id: userId,
      plan_type: 'free_trial',
      variations_used_today: 0,
      last_variation_reset: new Date().toISOString()
    });
  }

  return data || {
    plan_type: 'free_trial',
    variations_used_today: 0
  };
}

export async function canGenerateVariation(userId) {
  const { data } = await supabase
    .from('user_plans')
    .select('*')
    .eq('user_id', userId)
    .single();

  const today = new Date().toISOString().split('T')[0];
  const lastResetDate = data?.last_variation_reset?.split('T')[0] || null;

  if (!data || lastResetDate !== today) {
    await supabase
      .from('user_plans')
      .update({
        variations_used_today: 0,
        last_variation_reset: new Date().toISOString()
      })
      .eq('user_id', userId);
  }

  return data.variations_used_today < 5;
}
