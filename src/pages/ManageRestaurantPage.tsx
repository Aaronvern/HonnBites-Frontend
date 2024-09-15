import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

export default function ManageRestaurantPage() {
  const { isLoading, createRestaurant } = useCreateMyRestaurant();

  return (
    <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />
  );
}
