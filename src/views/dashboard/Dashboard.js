import React from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import ReactImg from 'src/assets/images/react.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  return (
    <CCol xs={12}>
      <CRow>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Güzellik Merkezimize Hoşgeldiniz</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Güzellik Merkezimiz Hizmetinize açılmıştır.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '20px' }}>
              <CRow>
                <CCard style={{ width: '18rem' }}>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Hakkımızda</CCardTitle>
                    <CCardText>
                      Yeni yerimiz ve profesyonel çalışanlarımız ile sizlere hizmet vermekteyiz.
                    </CCardText>
                  </CCardBody>
                </CCard>
                <CCard style={{ width: '18rem' }}>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>İletişim & Konum</CCardTitle>
                    <CCardText>
                      İletişim: 0 (216) 878 78 40
                      <p>Adres: Kısmet Blokları, Güzeltepe, 34060 Eyüpsultan/İstanbul</p>
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CRow>
            </div>
          </CCardBody>
        </CCard>
      </CRow>
    </CCol>
  )
}

export default Dashboard
