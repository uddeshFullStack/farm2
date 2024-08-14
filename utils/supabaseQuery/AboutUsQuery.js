
import supabase from '../supabase/server'
export async function fetchAboutUs() {
  const { data, error } = await supabase
    .from("AboutUs")
    .select('*')
    // console.log(data);
  if (error) throw new Error("Error fetching Break Even Details!");

  return data;
}

export const upsertAboutUs = async (data) => {
//   console.log("AboutUs");
const response = await supabase.from("AboutUs").upsert(data);
return response
};
