import supabase from '../supabase/server';

export async function fetchFarmList(limit, offset, state, district) {
  let query = supabase
    .from("FarmList")
    .select('*', { count: "exact" })
    .range(offset, offset + limit - 1); // Implementing pagination

  if (state) {
    query = query.eq("state", state);
  }

  if (district) {
    query = query.eq("district", district);
  }

  const { data, count, error } = await query;

  if (error) throw new Error("Error fetching farms!");

  return { data, count };
}

export async function fetchFarmDetailsById(id) {
  const { data, error } = await supabase
    .from("FarmList")
    .select('*')
    .eq("id", id)
    .single(); // Fetch a single farm record by ID

  if (error) throw new Error("Error fetching farm details!");

  return data;
}
