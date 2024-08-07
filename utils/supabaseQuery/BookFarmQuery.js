
import supabase from '../supabase/server'
export async function fetchBookFarm() {
  const { data, error } = await supabase
    .from("BookFarm")
    .select('*')
    console.log(data);
  if (error) throw new Error("Error fetching Break Even Details!");

  return data;
}

export const upsertBookFarm = async (data) => {
  const response = await supabase.from("BookFarm").upsert(data);
  return response
};
