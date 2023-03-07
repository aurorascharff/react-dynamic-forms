import { useMutation, useQuery } from 'react-query';
import { getFormFields } from '../api/api-calls';

export default function useAddFormField() {
  // return useMutation(
  //   hero => {
  //     return postAxios<HeroType>(EndPoints.heroes, hero);
  //   },
  //   {
  //     onMutate: async (hero: HeroType) => {
  //       await queryClient.cancelQueries([keys.heroes]);
  //       const backup = queryClient.getQueryData<{ data: HeroType[] }>(keys.heroes);
  //       if (backup) {
  //         queryClient.setQueryData<{ data: HeroType[] }>([keys.heroes], {
  //           data: [...backup.data, hero], // Optimistically update by adding the hero
  //         });
  //       }
  //       return { backup };
  //     },
  //     // If the mutation fails, use the value returned from onMutate to roll back
  //     onError: (err, hero, context) => {
  //       if (context?.backup) {
  //         queryClient.setQueryData<{ data: HeroType[] }>([keys.heroes], context.backup);
  //       }
  //     },
  //     // Always refetch after error or success
  //     onSettled: () => {
  //       queryClient.invalidateQueries([keys.heroes]);
  //     },
  //   },
  // );
}
