
import supabase from '../supabase/server'
export async function fetchStartAgrotourism() {
  const { data, error } = await supabase
    .from("StartAgrotourism")
    .select('*')
    // console.log(data);
  if (error) throw new Error("Error fetching Break Even Details!");

  return data;
}

export const upsertStartAgrotourism = async (data) => {
  const response = await supabase.from("StartAgrotourism").upsert(data);
  return response
};
