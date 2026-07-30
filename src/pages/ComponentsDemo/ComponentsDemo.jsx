import { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';
import './ComponentsDemo.css';

/**
 * Trang demo kiểm thử trực quan các component dùng chung - Tuần 3
 */
function ComponentsDemo() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="container demo-page">
      <h1>Demo UI Components</h1>

      <section className="demo-section">
        <h2>Button</h2>
        <div className="demo-row">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      <section className="demo-section">
        <h2>Input</h2>
        <Input
          placeholder="Nhập họ tên..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Input placeholder="Nhập số điện thoại..." error="Số điện thoại không đúng định dạng" />
      </section>

      <section className="demo-section">
        <h2>Modal</h2>
        <Button onClick={() => setOpen(true)}>Mở Modal</Button>
        <Modal open={open} title="Modal demo" onClose={() => setOpen(false)}>
          <p>Nội dung modal hiển thị bằng React Portal, đè lên trang.</p>
        </Modal>
      </section>
    </div>
  );
}

export default ComponentsDemo;
