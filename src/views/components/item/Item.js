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
	CPagination,
	CPaginationItem,
	CFormCheck,
} from '@coreui/react';
export default function Item() {
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
						<CFormFloating className="mb-3">
							<CFormControl
								className="input-font-size-sm"
								id="floatingInput"
								type="text"
								placeholder="Display Name"
							/>
							<CFormLabel htmlFor="floatingInput">Display Name</CFormLabel>
						</CFormFloating>
					</CCol>
					<CCol xs>
						<CFormFloating className="mb-3">
							<CFormControl
								id="floatingInput"
								type="text"
								placeholder="Contact Name"
							/>
							<CFormLabel htmlFor="floatingInput">Contact Name</CFormLabel>
						</CFormFloating>
					</CCol>
					<CCol xs>
						<CFormFloating className="mb-3">
							<CFormControl
								sm
								id="floatingInput"
								type="text"
								placeholder="Phone"
							/>
							<CFormLabel htmlFor="floatingInput">Phone</CFormLabel>
						</CFormFloating>
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
						<CTableHeaderCell scope="col">Precio</CTableHeaderCell>
						<CTableHeaderCell scope="col">Telefono</CTableHeaderCell>
						<CTableHeaderCell scope="col">Added On</CTableHeaderCell>
					</CTableRow>
				</CTableHead>
				<CTableBody>
					<CTableRow>
						<CTableHeaderCell>
							<CFormCheck id="flexCheckDefault" label="" />
						</CTableHeaderCell>
						<CTableHeaderCell scope="col">1</CTableHeaderCell>
						<CTableDataCell scope="row">San Vicente</CTableDataCell>
						<CTableDataCell>10.50</CTableDataCell>
						<CTableDataCell>829-894-4863</CTableDataCell>
						<CTableDataCell>2021/07/19</CTableDataCell>
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
						<CTableHeaderCell scope="col">2</CTableHeaderCell>
						<CTableDataCell scope="row">San Isidro</CTableDataCell>
						<CTableDataCell>32.90</CTableDataCell>
						<CTableDataCell>829-894-4863</CTableDataCell>
						<CTableDataCell>2021/07/19</CTableDataCell>
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
						<CTableHeaderCell scope="col">3</CTableHeaderCell>
						<CTableDataCell scope="row">Enriquillo</CTableDataCell>
						<CTableDataCell>13.50</CTableDataCell>
						<CTableDataCell>829-894-4863</CTableDataCell>
						<CTableDataCell>2021/07/19</CTableDataCell>
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
					<CModalTitle>Customer</CModalTitle>
				</CModalHeader>
				<CModalBody>
					<CForm>
						<CRow className="g-3">
							<CCol xs>
								<CFormFloating className="mb-3">
									<CFormControl id="floatingInput" placeholder="Name" />
									<CFormLabel htmlFor="floatingInput">ID</CFormLabel>
								</CFormFloating>
							</CCol>
							<CCol xs>
								<CFormFloating className="mb-3">
									<CFormControl id="floatingInput" placeholder="Country" />
									<CFormLabel htmlFor="floatingInput">Nombre</CFormLabel>
								</CFormFloating>
							</CCol>
						</CRow>
						<CRow className="g-3">
							<CCol xs>
								<CFormFloating className="mb-3">
									<CFormControl id="floatingInput" placeholder="Name" />
									<CFormLabel htmlFor="floatingInput">Precio</CFormLabel>
								</CFormFloating>
							</CCol>
							<CCol xs>
								<CFormFloating className="mb-3">
									<CFormControl id="floatingInput" placeholder="Country" />
									<CFormLabel htmlFor="floatingInput">Telefono</CFormLabel>
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
