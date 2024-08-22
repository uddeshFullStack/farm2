import supabase from '../supabase/server'
export async function fetchRegisterEvent() {
  const { data, error } = await supabase
    .from("RegisterEvent")
    .select('*')
  if (error) throw new Error("Error fetching Break Even Details!");

  return data;
}

export const upsertRegisterEvent = async (data) => {
const response = await supabase.from("RegisterEvent").upsert(data);
return response
};
