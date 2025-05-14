import { useNotification } from "../hooks/useNotification";

const NotificationButton: React.FC = () => {
  const { showNotification } = useNotification();

  return (
    <button onClick={() => showNotification("✅ Success transaction")}>
      Confirm transaction
    </button>
  )
}

export default NotificationButton;
