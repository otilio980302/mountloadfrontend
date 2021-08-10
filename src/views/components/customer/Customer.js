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

import { HiArrowCircleUp } from 'react-icons/hi';
export default function Products() {
	const [visible, setVisible] = useState(false);
	const [showFilter, setShowFilter] = useState(true);
	return (
		<div>
			<div className="docs-example-row docs-example-row-flex-cols">
				<CContainer>
					<CRow className="justify-content-end">
						<CCol xs={1}>
							<CButton onClick={() => setShowFilter(!showFilter)}>
								Filter <CIcon name="cil-filter" customClassName="" />
							</CButton>
						</CCol>
						<CCol xs={2}>
							<CButton onClick={() => setVisible(!visible)}>
								<CIcon name="cil-user-follow" customClassName="" /> Add Customer
							</CButton>
						</CCol>
					</CRow>
				</CContainer>
			</div>

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
						<CTableHeaderCell scope="col">ID</CTableHeaderCell>
						<CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
						<CTableHeaderCell scope="col">Nombre de Contacto</CTableHeaderCell>
						<CTableHeaderCell scope="col">Phone</CTableHeaderCell>
						<CTableHeaderCell scope="col">Cedula</CTableHeaderCell>
						<CTableHeaderCell scope="col">Added On</CTableHeaderCell>
					</CTableRow>
				</CTableHead>
				<CTableBody>
					<CTableRow>
						<CTableHeaderCell>
							<CFormCheck id="flexCheckDefault" label="" />
						</CTableHeaderCell>
						<CTableDataCell scope="row">1</CTableDataCell>
						<CTableDataCell scope="row">Sally Pachocha</CTableDataCell>
						<CTableDataCell>Stephania Denesik</CTableDataCell>
						<CTableDataCell>809-536-9543</CTableDataCell>
						<CTableDataCell>405-5995618-1</CTableDataCell>
						<CTableDataCell>2021/07/18</CTableDataCell>
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
									<CDropdownItem>
										<CIcon name="cil-pencil" size="sm" /> Edit
									</CDropdownItem>
									<CDropdownItem>
										<CIcon name="cil-low-vision" size="sm" /> View
									</CDropdownItem>
									<CDropdownItem>
										<CIcon name="cil-trash" size="sm" /> Delete
									</CDropdownItem>
								</CDropdownMenu>
							</CDropdown>
						</CTableDataCell>
					</CTableRow>
					<CTableRow>
						<CTableHeaderCell>
							<CFormCheck id="flexCheckDefault" label="" />
						</CTableHeaderCell>
						<CTableDataCell scope="row">2</CTableDataCell>
						<CTableDataCell scope="row">Garrick Bernhard</CTableDataCell>
						<CTableDataCell>Santino Abbott</CTableDataCell>
						<CTableDataCell>809-536-9543</CTableDataCell>
						<CTableDataCell>405-5995618-1</CTableDataCell>
						<CTableDataCell>2021/07/18</CTableDataCell>
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
									<CDropdownItem>
										<CIcon name="cil-pencil" size="sm" /> Edit
									</CDropdownItem>
									<CDropdownItem>
										<HiArrowCircleUp /> View
									</CDropdownItem>
									<CDropdownItem>
										<CIcon name="cil-trash" size="sm" /> Delete
									</CDropdownItem>
								</CDropdownMenu>
							</CDropdown>
						</CTableDataCell>
					</CTableRow>
					<CTableRow>
						<CTableHeaderCell>
							<CFormCheck id="flexCheckDefault" label="" />
						</CTableHeaderCell>
						<CTableDataCell scope="row">3</CTableDataCell>
						<CTableDataCell scope="row">Amalia Will</CTableDataCell>
						<CTableDataCell>Bella Cole</CTableDataCell>
						<CTableDataCell>809-536-9543</CTableDataCell>
						<CTableDataCell>405-5995618-1</CTableDataCell>
						<CTableDataCell>2021/07/18</CTableDataCell>
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
									<CDropdownItem>
										<CIcon name="cil-pencil" size="sm" /> Edit
									</CDropdownItem>
									<CDropdownItem>
										<HiArrowCircleUp /> View
									</CDropdownItem>
									<CDropdownItem>
										<CIcon name="cil-trash" size="sm" /> Delete
									</CDropdownItem>
								</CDropdownMenu>
							</CDropdown>
						</CTableDataCell>
					</CTableRow>
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
