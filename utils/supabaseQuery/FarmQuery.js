
import supabase from '../supabase/server'
export async function fetchFarmList() {
  const { data, error } = await supabase
    .from("FarmList")
    .select('*')
  if (error) throw new Error("Error fetching Break Even Details!");

  return data;
}

export const upsertBreakEvenData = async (data) => {
  const response = await supabase.from("FarmList").upsert(data);
  return response
};

