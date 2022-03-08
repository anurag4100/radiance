export const nameToLabel = {
    first_name: 'First Name',
    last_name: 'Last Name',
    middle_name: 'Middle Name',
    dob: 'Date of Birth',
    email: 'Email',
    mobile: 'Mobile No.',
    details: 'Other',
    role_name: 'Role Name',
    role_type: 'Role Type',
    role_payBand: 'Role Pay Band',
    joining_date: 'Joining Date',
    comp_type: 'Compensation Type',
    comp_amount: 'Compensation Amount',
    comp_isTaxable: 'Is Taxable',
    add_line1: 'Line 1',
    add_line2: 'Line 2',
    add_line3: 'Line 3',
    add_city: 'City',
    add_district: 'District',
    add_state: 'State',
    add_country: 'Country',
    add_zip: 'Zip/Postal Code'
  };

  export const mapToLabel = (arr) => {
      return arr.map(v => nameToLabel[v]);
  }