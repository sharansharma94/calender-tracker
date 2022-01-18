import { useEffect, useState } from "react";
import { getItems } from "../services/backendAPI";

export const useItems = () => {
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<any>(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getItems();
        setItems(data || []);
      } catch (error: any) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  return { items, isLoading, error };
};
