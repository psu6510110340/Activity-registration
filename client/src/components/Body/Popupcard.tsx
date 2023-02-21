import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CardLog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Swal.fire({
      icon: 'error',
      title: 'คุณไม่มีสิทธิ์เข้าถึง',
      text: 'โปรดทำการล็อคอินเพื่อเข้าชมเว็บไซต์',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login');
      }
    });
  }, [navigate]);

  return (
    <div>
    </div>
  );
};

export default CardLog;
