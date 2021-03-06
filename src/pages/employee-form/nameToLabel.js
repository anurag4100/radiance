export const nameToLabel = {
  first_name: "First Name",
  last_name: "Last Name",
  middle_name: "Middle Name",
  dob: "Date of Birth",
  email: "Email",
  mobile: "Mobile No.",
  details: "Other",
  role_name: "Role Name",
  role_type: "Role Type",
  role_payBand: "Role Pay Band",
  joining_date: "Joining Date",
  comp_type: "Compensation Type",
  comp_amount: "Compensation Amount",
  comp_isTaxable: "Is Taxable",
  add_line1: "Line 1",
  add_line2: "Line 2",
  add_line3: "Line 3",
  add_city: "City",
  add_district: "District",
  add_state: "State",
  add_country: "Country",
  add_zip: "Zip/Postal Code",
  edu_highest: "Highest Education",
  edu_ssc: "SSC",
  edu_hsc: "HSC",
  edu_others: "Other Edu",
  exp_lastOrg: "Last Org",
  exp_years: "Experience",
};

export const mapToEmployee = (data) => {
  return {
    Personal: {
      "First Name": data.first_name,
      "Middle Name": data.middle_name,
      "Last Name": data.last_name,
      "Date of Birth": data.dob,
      Email: data.email,
      Mobile: data.mobile,
    },
    Address: {
      "Line 1": data.add_line1,
      "Line 2": data.add_line2,
      "Line 3": data.add_line3,
      City: data.add_city,
      District: data.add_district,
      State: data.add_state,
      "Zip/Postal": data.add_zip,
    },
    Education: {
      "Highest Education": data.edu_highest,
      SSC: data.edu_ssc,
      HSC: data.edu_hsc,
      Others: data.edu_others,
    },
    Experience: {
      "Previous Org": data.exp_lastOrg,
      Years: data.exp_years,
    },
    Compensation: {
      "Joining Date": data.joining_date,
      "Role Name": data.role_name,
      "Role Type": data.role_type,
      "Role Payband": data.role_payBand,
      "Compensation Type": data.comp_type,
      "Compensation Amount": data.comp_amount,
      "Is Taxable": data.comp_isTaxable,
    },
  };
};
