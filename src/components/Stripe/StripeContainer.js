import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="linkedin" onClick={onOpen}>
        Pay Amount
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Elements stripe={stripeTestPromise}>
              <CheckoutForm onClose={onClose} />
            </Elements>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Stripe;
