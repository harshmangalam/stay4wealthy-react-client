import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, Input, Textarea, useToast, VStack } from "@chakra-ui/react";
import axios from "axios";

export const CheckoutForm = ({ onClose }) => {
  const toast = useToast();
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        console.log(error);
        return;
      }

      const { id } = paymentMethod;
      const response = await axios.post("/payment/charge", {
        amount,
        id,
        description,
      });

      toast({
        title: "Payment Message",
        description: response.data.message,
        status: response.data.status,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Payment Message",
        description: error?.response.data.message,
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />

      <VStack d="flex" justifyContent="center" py="6">
        <Input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Textarea
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          isLoading={loading}
          disabled={loading}
          colorScheme="linkedin"
          type="submit"
          isFullWidth
        >
          Pay
        </Button>
      </VStack>
    </form>
  );
};
