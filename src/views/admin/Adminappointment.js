import { cilMoodBad, cilMoodGood, cilMoodVeryBad, cilMoodVeryGood } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'

const Adminappointment = () => {
  const [data, setData] = useState()

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

  const updateStatus = (row, status) => {
    fetch(`http://localhost:1337/api/appointments/${row.id}`, {
      // Adding method type
      method: 'PUT',

      // Adding body or contents to send
      body: JSON.stringify({
        data: {
          status: status,
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
          alert('İşlem Başarılı')
          const find = data.find((element) => element.id === row.id)
          if (find) {
            find.attributes.status = status
            setData([...data])
          }
        } else {
          alert('İşlem Başarısız')
        }
        console.log(response)
      })
  }

  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Admin</strong>
        </CCardHeader>
        <CCardBody>
          <p className="text-medium-emphasis small">Appointments</p>

          <CTable bordered>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                <CTableHeaderCell scope="col">Operation</CTableHeaderCell>
                <CTableHeaderCell scope="col">Notes</CTableHeaderCell>
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
                    <CTableDataCell key={'k' + index}>{item?.attributes?.note}</CTableDataCell>
                    <CTableDataCell key={'c' + index}>
                      {formatStatus(item?.attributes?.status)}
                    </CTableDataCell>
                    <CTableDataCell
                      key={'a' + index}
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <CDropdown variant="btn-group">
                        <CDropdownToggle color="primary">Durum Değiştir</CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem onClick={() => updateStatus(item, 'Approved')}>
                            Approved
                          </CDropdownItem>
                          <CDropdownItem onClick={() => updateStatus(item, 'Rejected')}>
                            Rejected
                          </CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
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

export default Adminappointment
