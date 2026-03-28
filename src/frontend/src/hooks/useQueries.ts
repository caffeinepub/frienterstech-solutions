import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      companyName: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitForm(
        data.name,
        data.email,
        data.companyName,
        data.phone || null,
        data.message,
      );
    },
  });
}

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["submissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
