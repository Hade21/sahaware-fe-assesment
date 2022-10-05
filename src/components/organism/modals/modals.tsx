import { FormUser } from "../../molecule";

interface ModalProps {
  close: (e: boolean) => void;
}
const Modals = ({ close }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0">
      <FormUser type="signin" close={close} />
    </div>
  );
};

export default Modals;
