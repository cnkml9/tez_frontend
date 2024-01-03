import React, { Component,useEffect } from 'react'
import notificationService from './NotificationService';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';


 class AdminSidebar extends Component {
 

  render() {


    const handleConfirmation = () => {
      notificationService.confirmAndNotify(
        'Bu işlemi onaylamak istiyor musunuz?',
        () => {
          // Burada onay durumunda gerçekleştirilmesi gereken işlemi yapabilirsiniz
        },
        () => {
          // Reddetme durumunda gerçekleştirilmesi gereken işlemi yapabilirsiniz
        }
      );
    };
    return (
      
      <div>
      <button onClick={() => notificationService.success(notificationService.showSuccessMessage)}>Başarılı Bildirim</button>
      <button onClick={() => notificationService.error(notificationService.showErrorMessage)}>Hata Bildirimi</button>
      <button onClick={() => notificationService.info(notificationService.showInfoMessage)}>Bilgi Bildirimi</button>
      <button onClick={handleConfirmation}>İşlemi Onayla</button>

      <ToastContainer /> {/* Toast bildirim konteynerı */}
    </div>
    )
  }
}
export default AdminSidebar;