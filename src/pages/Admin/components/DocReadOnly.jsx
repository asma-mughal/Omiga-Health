import React from 'react'
import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AuthContext from '../../../context/AuthContext';
const DocReadOnly = ({ item, handleEditClick, handleDeleteClick }) => {
  const {t, i18n} = useTranslation(['ABOUT']);
  let loopData;
  const [hospName, setHospName] = useState('');
  const [deptArray,setDeptArray] = useState([]);
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
    {item._id}
    </th>
    <td class="py-4 px-6 text-center">
    {item.name} 
    </td>
    <td class="py-4 px-6 text-center">
    {item.qualification}
    </td>
    <td class="py-4 px-6 text-center">
    {item.experiance}
    </td>
    <td class="py-4 px-6 text-center">
   <img src={item.image} className='h-10 w-10 text-center'/>
    </td>
    <td class="py-4 px-6 flex flex-col justify-center items-center">
    <button
          type="button"
          className="group relative flex
                  w-20  justify-center rounded-md border border-transparent bg-secondary
                   py-1 px-2 text-sm font-medium text-white hover:bg-white
                   hover:text-black hover:border-secondary
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={(event) => handleEditClick(event, item)}
        >
          {t("Edit")}
        </button>
        <button type="button"
        className="group relative flex
        w-20 justify-center rounded-md border border-transparent bg-secondary
         py-1 px-2 text-sm font-medium text-white hover:bg-white
         hover:text-black hover:border-secondary
         mt-2
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => handleDeleteClick(item._id)}>
          {t("Delete")}
        </button>
    </td>
  </tr>
  )
}

export default DocReadOnly
