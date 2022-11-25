/* eslint-disable no-console */
import { ErrorMessage, Field } from 'formik';
import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const SelectField = ({
  data,
  label,
  showErrors,
}: {
  data: { name: string }[];
  label: string;
  showErrors: boolean;
}) => {
  const [showList, setShowList] = useState(false);
  const [selectItem, setSelectItem] = useState(0);
  const [showSelectItem, setShowSelectItem] = useState(label);
  const [connectField, setConnectField] = useState('');

  const handelDeleteItem = () => {
    setSelectItem(0);
    setConnectField('');
    setShowSelectItem('');
    // console.log(connectField, selectItem, showSelectItem);
  };

  useEffect(() => {
    handelDeleteItem();
  }, [connectField]);

  return (
    <main className="max-w-[500px]">
      {showErrors && (
        <div>
          <ErrorMessage name={label} />
        </div>
      )}
      <div
        onClick={() => {
          setShowList((prev) => !prev);
        }}
        className=" relative flex h-[40px] w-[320px] min-w-[250px] max-w-[500px] cursor-pointer items-center gap-2 rounded-[10px] bg-white  pl-2 shadow-sm shadow-gray-500"
      >
        <BsFillCheckCircleFill
          className={
            !selectItem
              ? 'text-[17px] text-gray-400 transition-all duration-300 ease-linear'
              : 'text-[20px] text-blue-600 transition-all duration-300 ease-linear'
          }
        />
        <span className="transition-all duration-300 ease-linear">
          {selectItem ? showSelectItem : `select ${label}`}
        </span>
        <div className="absolute right-3">
          <AiFillCloseCircle
            onClick={handelDeleteItem}
            className={
              selectItem
                ? 'z-30 text-[25px] text-red-600 opacity-100 transition-all duration-300 ease-linear'
                : ' text-[25px] text-red-600 opacity-0 duration-300 ease-linear'
            }
          />
        </div>
      </div>

      <div
        className={
          showList
            ? 'mx-auto mt-1 h-[220px] w-[300px] translate-y-0 scale-[1]  overflow-y-scroll rounded-[10px] bg-white  opacity-100 shadow-lg shadow-black/50 transition-all duration-200 ease-linear'
            : 'mx-auto mt-1 h-[0px] w-[300px] translate-y-[-20px] scale-[0.5] overflow-y-scroll rounded-[10px] bg-white  opacity-0 transition-all duration-300 ease-linear'
        }
      >
        <ul className="w-full">
          {data.map((item, i) => {
            return (
              <label key={i} htmlFor={item.name}>
                <div
                  onClick={() => {
                    setSelectItem(i);
                    setShowSelectItem(item.name);
                    setConnectField(item.name);
                  }}
                  key={i}
                  className={
                    selectItem === i
                      ? ' flex cursor-pointer items-center bg-blue-700 p-2 transition-colors duration-150 ease-linear hover:bg-blue-600'
                      : ' flex cursor-pointer items-center bg-white p-2 transition-colors duration-150 ease-linear hover:bg-blue-600'
                  }
                >
                  <span>
                    <BiCheck
                      className={
                        selectItem === i
                          ? 'scale-100 opacity-100 transition-transform duration-200 ease-in'
                          : 'scale-0 opacity-0 transition-transform duration-200 ease-in'
                      }
                    />
                  </span>
                  <li
                    key={i}
                    className={
                      selectItem === i
                        ? 'my-1 translate-x-[15px] cursor-pointer font-medium transition-transform duration-200 ease-in'
                        : 'my-1 translate-x-[0px] cursor-pointer transition-transform duration-200 ease-in'
                    }
                  >
                    {item.name}
                  </li>
                  <Field
                    type="radio"
                    required
                    id={item.name}
                    name="picked"
                    value={selectItem ? connectField : ''}
                    className="opacity-0"
                  />
                </div>
              </label>
            );
          })}
        </ul>
      </div>
    </main>
  );
};
export default SelectField;
