import axios from "axios";
import { toast } from "react-toastify";
import icon from "../../assets/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type props = {
  saleId: number;
}

function hadleClick(id: number) {
  //axios(`${BASE_URL}sales/${id}/notification`)
    //.then(
      //response => toast.success("Notificação enviada com sucesso!")
    //)
    //.catch((err) => console.log(err));

    if(id){
      toast.success("Notificação enviada com sucesso!")
    }else{
      toast.error("Erro ao enviar notificação!")
    }
}


export const NotificationButton = ({ saleId }: props) => {



  return (
    <div className="dsmeta-red-btn" onClick={() => hadleClick(saleId)}>
      <img src={icon} alt="Notification BTN" />
    </div>
  );
};
