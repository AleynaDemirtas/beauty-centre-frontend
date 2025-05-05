import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { useFetcher } from 'react-router-dom'
import avatar1 from 'src/assets/images/avatars/748463.png'
import { cibWindows } from '@coreui/icons'

const Confirmation = () => {
  const navigate = useNavigate();
    return (
      <CCol xs={12}>
      <CCard className='mb-2'>
        <CCardHeader style={{ display: "flex", justifyContent: "center"}}>
          <strong>Your Appointment Request has been approved</strong>
        </CCardHeader>
        <CCardBody>
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: "50px"}}>
            <img src={avatar1} alt="748463" width="400" height="400"/>
          <button className="btn btn-success" type="button" onClick={() => {
            navigate("/appointment/myappointment");
          }}>View the List</button>
          </div>
        </CCardBody>

      </CCard>
      </CCol>
    )        
}
export default Confirmation;