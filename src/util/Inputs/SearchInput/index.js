import React from 'react'
import cn from 'classnames'
import { Button, Form } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'
import styles from '../style.module.scss'

const SearchInput = ({
  value = '',
  placeholder,
  onChange,
  maxLength,
  className,
}) => {
  const handleChange = (e) => {
    const { value } = e.target
    const lowerCaseValue = value?.toLowerCase()
    e.target.value = lowerCaseValue
    onChange(e)
  }

  return (
    <Form.Group className={cn(styles.group, className)}>
      <Form.Control
        type="text"
        name="Search"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        maxLength={maxLength}
        variant="primary"
      />
      <Button className={styles.searchBtn}>
        Search <Search color="white" className="ms-2" />{' '}
      </Button>
    </Form.Group>
  )
}

export default SearchInput
