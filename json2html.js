// json2html.js
export default function json2html(data) {
    // Create the table header
    const tableHeader = `<thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
    </thead>`;
  
    // Create the table body by mapping over the data array
    const tableBody = data.map(row => {
      const nameCell = `<td>${row.Name}</td>`;
      const ageCell = `<td>${row.Age}</td>`;
      const genderCell = row.Gender ? `<td>${row.Gender}</td>` : '';
  
      return `<tr>${nameCell}${ageCell}${genderCell}</tr>`;
    }).join('');
  
    // Combine the parts into the full table
    const htmlTable = `<table data-user="rspd0109@gmail.com">
      ${tableHeader}
      <tbody>
        ${tableBody}
      </tbody>
    </table>`;
  
    return htmlTable;
  }
  