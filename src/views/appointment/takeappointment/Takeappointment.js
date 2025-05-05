import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'
import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CButton,
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
//import { DocsExample } from 'src/components'
import { useFetcher } from 'react-router-dom'

const Takeappointment = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [formDate, setFormDate] = useState()
  const [formOperation, setFormOperation] = useState()
  const [formNote, setFormNate] = useState()

  useEffect(() => {
    fetch('http://localhost:1337/api/operations?populate=*')
      .then((response) => response.json())
      .then((response) => setData(response.data))
  }, [])

  const handleOperationSelect = (event) => {
    console.log(event.target.value)
    setFormOperation(event.target.value)
  }

  const handleSubmit = () => {
    fetch('http://localhost:1337/api/appointments', {
      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify({
        data: {
          appointmentdate: formDate, //'2022-12-12T16:57:06.294Z',
          status: 'Awaiting',
          operation: formOperation,
          note: formNote,
        },
      }),

      // Adding headers to the request
      headers: {
        Accept: '*/*',
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      // Converting to JSON
      .then((response) => {
        if (response.status === 200) {
          navigate('/confirm')
        } else {
        }
        console.log(response)
      })
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <strong>Make A Appointment</strong>
      </CCardHeader>
      <CCardBody>
        <p className="text-medium-emphasis small">
          <b>Fill in the information below to make an appointment</b>
        </p>

        <CForm className="row g-3">
          <CCol md={3}>
            <CFormLabel htmlFor="inputCity">Date</CFormLabel>
            <CFormInput
              onChange={(e) => setFormDate(e?.target?.value)}
              type={'datetime-local'}
              id="inputCity"
            />
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="inputState">Operation</CFormLabel>
            <CFormSelect onChange={handleOperationSelect} id="inputState">
              <option>Choose...</option>
              {data &&
                data.map((item, index) => (
                  <option key={index} value={item?.id}>
                    {item?.attributes?.name}
                  </option>
                ))}
            </CFormSelect>
          </CCol>
          <CCol md={5}>
            <CFormLabel htmlFor="inputZip">Note</CFormLabel>
            <CFormTextarea onChange={(e) => setFormNate(e?.target?.value)} id="inputZip" />
          </CCol>
          <CCol xs={12}>
            <CButton
              color="primary"
              className="mt-3"
              active
              tabIndex={-1}
              onClick={() => handleSubmit()}
            >
              Submit
            </CButton>
          </CCol>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default Takeappointment
