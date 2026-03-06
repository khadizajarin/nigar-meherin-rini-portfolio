import { useQuery } from "@tanstack/react-query";
import { getContact } from "./../services/contact.firebase";

export function useContact() {
  return useQuery({
    queryKey: ["contact"],
    queryFn: getContact,
  });
}