
import supabase from '../supabase/server'
export async function fetchContactUs() {
  const { data, error } = await supabase
    .from("ContactUs")
    .select('*')
    // console.log(data);
  if (error) throw new Error("Error fetching Break Even Details!");

  return data;
}

export const upsertContactUs = async (data) => {
  // console.log("ContactUs in upssert ", data);
  const response = await supabase.from("ContactUs").upsert(data);
  return response
};
