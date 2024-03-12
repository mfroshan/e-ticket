import React from 'react';
import { Container, Table, Button } from './StationListContainerElements';
import Axios from 'axios';

const StationListContainer = (props) => {
  const styleRow = {
    borderTop: '1px solid #a4b0af',
  };
  const styleCol1 = {
    fontSize: '16px',
    padding: '10px 0px 10px 10px',
    width: '45%',
    verticalAlign: 'top',
    borderRight: '1px solid #a4b0af',
  };
  const styleCol2 = {
    display: 'flex',
    fontSize: '16px',
    padding: '10px 0px 10px 0px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const deleteStationPressed = (event) => {
    event.preventDefault();

    Axios.post('http://localhost:3001/api/deleteStation', {
      station_name: props.item.Name,
    }).then((res) => {
      if (res.data.isValid) {
        alert('Station Deleted Successfully!');
        props.getStation();
      } else {
        alert('Error');
      }
    });
  };

  return (
    <Container>
      <Table>
        <tr>
          <td style={styleCol1}>{props.item.Name}</td>
          <td style={styleCol1}>{props.item.District}</td>
          <td style={styleCol2}>
            <Button onClick={deleteStationPressed}></Button>
          </td>
        </tr>
      </Table>
    </Container>
  );
};

export default StationListContainer;
