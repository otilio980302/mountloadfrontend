import React, { useState } from 'react';
import CIcon from '@coreui/icons-react';
import {
	CCol,
	CRow,
	CContainer,
	CTable,
	CTableHead,
	CTableRow,
	CTableHeaderCell,
	CTableDataCell,
	CTableBody,
	CButton,
	CModal,
	CModalHeader,
	CModalTitle,
	CModalBody,
	CModalFooter,
	CForm,
	CFormLabel,
	CFormControl,
	CFormFloating,
	CDropdown,
	CDropdownToggle,
	CDropdownMenu,
	CDropdownItem,
	CFormFeedback,
	CPagination,
	CPaginationItem,
	CFormCheck,
	CInputGroup,
} from '@coreui/react';

import axios from 'axios';

import { HiArrowCircleUp } from 'react-icons/hi';
export default function NewTrip() {
	const [trips, setTrips] = useState([]);

	axios.get('https://backendtrucks.herokuapp.com/getjourney').then((res) => {
		const trip = res.data;
		setTrips(trip);
	});
	const [visible, setVisible] = useState(false);
	const [showFilter, setShowFilter] = useState(true);
	return (
		<div>
			<CContainer style={{ 'margin-top': '10px' }} hidden={showFilter}>
				<CRow>
					<CCol xs>
						<CInputGroup size="sm" className="mb-3">
							<CFormControl
								className="input-font-size-sm"
								type="text"
								placeholder="Display Name"
							/>
						</CInputGroup>
					</CCol>
					<CCol xs>
						<CFormControl
							id="floatingInput"
							type="text"
							placeholder="Contact Name"
						/>
					</CCol>
					<CCol xs>
						<CFormControl
							sm
							id="floatingInput"
							type="text"
							placeholder="Phone"
						/>
					</CCol>
				</CRow>
			</CContainer>
			{/* Table  */}
			<CRow>
				<CCol sm xs={3}>
					<CFormLabel id="inputGroup-sizing-sm">
						Showing: <b>4</b> of <b>10</b>
					</CFormLabel>
				</CCol>
			</CRow>
			<CTable style={{ 'margin-top': '10px' }}>
				<CTableHead>
					<CTableRow>
						<CTableHeaderCell>
							<CFormCheck id="flexCheckDefault" label="" />
						</CTableHeaderCell>
						<CTableHeaderCell scope="col">Punto de partida</CTableHeaderCell>
						<CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
						<CTableHeaderCell scope="col">Total a pagar</CTableHeaderCell>
						<CTableHeaderCell scope="col">Tipo de Condicion</CTableHeaderCell>
						<CTableHeaderCell scope="col">Destinos</CTableHeaderCell>
						<CTableHeaderCell scope="col">Usuario</CTableHeaderCell>
					</CTableRow>
				</CTableHead>
				<CTableBody>
					{trips.map((s) => (
						<CTableRow>
							<CTableHeaderCell>
								<CFormCheck id="flexCheckDefault" label="" />
							</CTableHeaderCell>
							<CTableDataCell scope="row">{s.start_point}</CTableDataCell>
							<CTableDataCell scope="row">{s.date}</CTableDataCell>
							<CTableDataCell>{s.total_payment}</CTableDataCell>
							<CTableDataCell>Caliente</CTableDataCell>
							<CTableDataCell>
								<CDropdown>
									<CDropdownToggle
										variant="ghost"
										visible="true"
										color="secondary"
									>
										<CIcon name="cil-menu" size="lg" />
									</CDropdownToggle>
									<CDropdownMenu>
										{s.destiny.map((s) => (
											<CDropdownItem>
												<CIcon name="" size="sm" />
												{s}
											</CDropdownItem>
										))}
									</CDropdownMenu>
								</CDropdown>
							</CTableDataCell>
							<CTableDataCell>Juan</CTableDataCell>
						</CTableRow>
					))}
				</CTableBody>
			</CTable>
			{/* Pagination */}
			<CContainer sm>
				<CRow className="justify-content-center">
					<CCol xs={3}>
						<CPagination
							className="justify-content-end"
							aria-label="Page navigation example"
						>
							<CPaginationItem disabled>Previous</CPaginationItem>
							<CPaginationItem>1</CPaginationItem>
							<CPaginationItem>2</CPaginationItem>
							<CPaginationItem>3</CPaginationItem>
							<CPaginationItem>Next</CPaginationItem>
						</CPagination>
					</CCol>
				</CRow>
			</CContainer>
			<CModal size="lg" visible={visible}>
				<CModalHeader onDismiss={() => setVisible(false)}>
					<CModalTitle>Camioneros</CModalTitle>
				</CModalHeader>
				<CModalBody>
					<CForm>
						<CRow className="g-3">
							<h2>Basic Info</h2>
							<CCol xs>
								<CFormFloating className="mb-3">
									<CFormControl
										id="floatingInput"
										type="text"
										placeholder="Nombre a Mostrar"
									/>
									<CFormLabel htmlFor="floatingInput">
										Nombre a Mostrar
									</CFormLabel>
									<CFormFeedback valid>Looks good!</CFormFeedback>
								</CFormFloating>
							</CCol>
							<CCol xs>
								<CFormFloating className="mb-3">
									<CFormControl
										id="floatingInput"
										placeholder="Contacto Principal"
									/>
									<CFormLabel htmlFor="floatingInput">
										Contacto Principal
									</CFormLabel>
								</CFormFloating>
							</CCol>
						</CRow>

						<CRow className="g-3">
							<CCol xs>
								<CFormFloating className="mb-3">
									<CFormControl id="floatingInput" placeholder="Email" />
									<CFormLabel htmlFor="floatingInput">Email</CFormLabel>
								</CFormFloating>
							</CCol>
							<CCol xs>
								<CFormFloating className="mb-3">
									<CFormControl
										id="floatingInput"
										placeholder="Telefono"
										type="tel"
										size="10"
										pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
									/>
									<CFormLabel htmlFor="floatingInput">Telefono</CFormLabel>
								</CFormFloating>
							</CCol>
						</CRow>

						<CRow className="g-3">
							<CCol xs>
								<CFormFloating className="mb-3">
									<CFormControl id="floatingInput" placeholder="Matricula" />
									<CFormLabel htmlFor="floatingInput">Matricula</CFormLabel>
								</CFormFloating>
							</CCol>
							<CCol xs>
								<CFormFloating className="mb-3">
									<CFormControl id="floatingInput" placeholder="Cedula" />
									<CFormLabel htmlFor="floatingInput">Cedula</CFormLabel>
								</CFormFloating>
							</CCol>
						</CRow>
					</CForm>
				</CModalBody>
				<CModalFooter>
					<CButton color="secondary" onClick={() => setVisible(false)}>
						Close
					</CButton>
					<CButton
						type="submit"
						onClick={() => setVisible(false)}
						color="primary"
					>
						Save Customer
					</CButton>
				</CModalFooter>
			</CModal>
		</div>
	);
}

//Modal Add Customer
