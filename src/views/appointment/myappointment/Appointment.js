import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { useFetcher } from 'react-router-dom'

const Appointment = () => {
  const [data, setData] = useState()
  const [formDate, setFormDate] = useState()
  const [formOperation, setFormOperation] = useState()
  const [formStatus, setFormStatus] = useState()

  useEffect(() => {
    fetch('http://localhost:1337/api/appointments')
      .then((response) => response.json())
      .then((data) => {
        setFormDate(data.formDate)
        setFormOperation(data.formOperation)
        setFormStatus(data.formStatus)
      })
  }, [])
  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>My Appointments</strong>
        </CCardHeader>
        <CCardBody>
          <p className="text-medium-emphasis small">See your Appointments</p>

          <CTable bordered>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                <CTableHeaderCell scope="col">Operation</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell >{data.formDate.map((s) => (
                  <p key={s}>{console.log(s)}</p>
      ))};
                </CTableDataCell>
                <CTableDataCell>{formOperation}</CTableDataCell>
                <CTableDataCell>{formStatus}</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CCol>
  )
}

export default Appointment
