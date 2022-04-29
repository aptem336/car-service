import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, Form, Table} from 'semantic-ui-react';

const insuranceTypeList = [
    {key: 'o', text: 'ОСАГО', value: 'osago'},
    {key: 'c', text: 'КАСКО', value: 'casco'},
    {key: 'a', text: 'АВТОЗАЩИТА', value: 'autozashita'},
]

const inspectionTypeList = [
    {key: 'B', text: 'Техосмотр кат B', value: 'inspectionTypeB'},
    {key: 'C', text: 'Техосмотр кат C', value: 'inspectionTypeC'},
    {key: 'D', text: 'Техосмотр кат D', value: 'inspectionTypeD'},
]

export const Read = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getCarService()
    }, []);

    const getCarService = () => {
        axios.get(`https://626bc6d66a86cd64adc168b9.mockapi.io/car-service`)
            .then((response) => {
                setData(response.data);
            })
    }

    const deleteCarService = (id) => {
        axios.delete(`https://626bc6d66a86cd64adc168b9.mockapi.io/car-service/${id}`)
            .then(() => {
                getCarService();
            })
    }

    return (
        <div>
            <Button onClick={() => document.location = '/create'}>Create</Button>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ФИО</Table.HeaderCell>
                        <Table.HeaderCell>Номер телефона</Table.HeaderCell>
                        <Table.HeaderCell>Гос номер ТС</Table.HeaderCell>
                        <Table.HeaderCell>Вид страхования</Table.HeaderCell>
                        <Table.HeaderCell>Дата начала действия предыдущего полиса</Table.HeaderCell>
                        <Table.HeaderCell>Дата окончания действия предыдущего полиса</Table.HeaderCell>
                        <Table.HeaderCell>Запись на техосмотр</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data.map((row) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{row.fullName}</Table.Cell>
                                <Table.Cell>{row.phoneNumber}</Table.Cell>
                                <Table.Cell>{row.stateNumber}</Table.Cell>
                                <Table.Cell><Form.Select value={row.insuranceType} disabled options={insuranceTypeList}/></Table.Cell>
                                <Table.Cell>{row.insurancePolicyDateStart}</Table.Cell>
                                <Table.Cell>{row.insurancePolicyDateEnd}</Table.Cell>
                                <Table.Cell><Form.Select value={row.inspectionType} disabled options={inspectionTypeList}/></Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => document.location = `/update/${row.id}`}>Update</Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => deleteCarService(row.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}