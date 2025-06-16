import React from 'react'
import { cilCursor, cilMoodVeryGood, cilMoodGood, cilMoodBad, cilMoodVeryBad } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'

const Appointment = () => {
  const [data, setData] = useState()
  const [formDate, setFormDate] = useState()
  const [formOperation, setFormOperation] = useState()
  const [formStatus, setFormStatus] = useState()

  useEffect(() => {
    fetch('http://localhost:1337/api/appointments?populate=*')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data)
        setData(response.data)
      })
  }, [])

  const formatDate = (date) => {
    return format(new Date(date), `dd.MM.yyyy HH:mm`)
  }

  const formatStatus = (status) => {
    console.log(status)
    switch (status) {
      case 'Awaiting':
        return (
          <div
            style={{
              color: 'red',
              display: 'flex',
              gap: '5px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CIcon icon={cilMoodGood} />
            <span>Onay Bekliyor</span>
          </div>
        )
      case 'Approved':
        return (
          <div
            style={{
              color: 'green',
              display: 'flex',
              gap: '5px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CIcon icon={cilMoodVeryGood} />
            <span>Onaylandı</span>
          </div>
        )
      case 'Rejected':
        return (
          <div
            style={{
              color: 'black',
              display: 'flex',
              gap: '5px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CIcon icon={cilMoodBad} />
            <span>Reddedildi</span>
          </div>
        )
      case 'Cancelled':
        return (
          <div
            style={{
              color: 'blue',
              display: 'flex',
              gap: '5px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CIcon icon={cilMoodVeryBad} />
            <span>İptal Edildi</span>
          </div>
        )
      default:
        return 1
    }
  }

  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Randevularım</strong>
        </CCardHeader>
        <CCardBody>
          <p className="text-medium-emphasis small">Randevularınızı Görebilirsiniz</p>

          <CTable bordered>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                <CTableHeaderCell scope="col">Operation</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data &&
                data.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell key={'d' + index}>
                      {formatDate(item?.attributes?.appointmentdate)}
                    </CTableDataCell>
                    <CTableDataCell key={'o' + index}>
                      {item?.attributes?.operation?.data?.attributes?.name}
                    </CTableDataCell>
                    <CTableDataCell key={'s' + index}>
                      {formatStatus(item?.attributes?.status)}
                    </CTableDataCell>
                  </CTableRow>
                ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CCol>
  )
}

export default Appointment
