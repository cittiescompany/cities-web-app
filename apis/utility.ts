import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import clientApi from "./clientApi";
import { PurchasePayload, TransferPayload } from "@/types/type-props";

// const baseUrl='https://lendnode.creditclan.com/gateway/buypower/buypower/buypower/'
const additionalUrl='/payment/bills/'

export const useCheckMeter = () => {
   return useMutation({
    mutationFn: async (payload) => {
      return await clientApi.post(`${additionalUrl}checkmeter`,payload).then((res) => {
       return res.data;
      });
    },
  });
};

export const usePurchase = () => {
   return useMutation({
    mutationFn: async (payload:PurchasePayload) => {
      return await clientApi.post(`${additionalUrl}create_order`,payload).then((res) => {
       return res.data;
      });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
export const useVerifyPayment = () => {
   return useMutation({
    mutationFn: async (id:string) => {
      return await clientApi.post(`${additionalUrl}verify_bill/`,{id}).then((res) => {
       return res.data;
      });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
export const useGetDataPlan = () => {
   return useMutation({
    mutationFn: async (payload:{vertical:string,provider:string}) => {
      return await clientApi.post(`${additionalUrl}price_list`,payload).then((res) => {
       return res?.data?.data;
      });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};


export const useGetBankLists = () => {
  return useQuery({
    queryKey: ["bank_lists"],
    queryFn: async () => {
      const response = await clientApi.get("/payment/bank_lists");
   return response?.data?.data
    },
  });
};

export const useVerifyAccount = () => {
   return useMutation({
    mutationFn: async (payload:{ bankCode: string, accountNumber: string,}) => {
      return await clientApi.post("/payment/verify_account",payload).then((res) => {
       return res?.data?.data;
      });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};

export const useMakeTransfer = () => {
   return useMutation({
    mutationFn: async (payload:TransferPayload) => {
      return await clientApi.post("/payment/transfer",payload).then((res) => {
       return res?.data;
      });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
export const useCreatePin = () => {
  const queryClient=useQueryClient()
   return useMutation({
    mutationFn: async (payload:{ pin:string, confirm_pin: string, }) => {
      return await clientApi.post("/payment/create_pin",payload).then((res) => {
       return res?.data?.data;
      });
    },
    onSuccess:()=>{
     queryClient.invalidateQueries({queryKey: ["profile"]})
      queryClient.invalidateQueries({queryKey: ["user-account"]})
    },
    onError: (err) => {
      console.log(err);
    }
  });
};


export const useGetTransactions = () => {
   return useMutation({
    mutationFn: async (payload:{ page: number, start_date: string, end_date: string }) => {
      return await clientApi.post("/payment/transactions",payload).then((res) => {
       return res?.data?.data;
      });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};


export const useGetUserAccountDetails = (userId: string) => {
   return useQuery({
    queryKey: ["other-user-account", userId],
    queryFn: async () => {
     return await clientApi.get(`/payment/user/account/?userId=${userId}`).then((res) => {
       return res?.data?.data;
      });
    },
  });
};