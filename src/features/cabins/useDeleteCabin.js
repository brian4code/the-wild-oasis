import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

// create a custom hook to refactor code

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  // React Query to send delete request to remote state
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    // mutationFn: (id) => deleteCabin(id),     // same effect

    onSuccess: () => {
      toast.success("Cabin successfully deleted");

      //  trigger a re-fetch from remote state
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
