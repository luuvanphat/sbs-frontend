import { Helmet } from 'react-helmet-async';

/**
 * Component SEO dùng chung: đặt title + meta description động cho từng trang - Tuần 10
 */
function SEO({ title, description }) {
  const fullTitle = title ? `${title} | SBS Techs` : 'SBS Techs - Thiết bị tự động hóa công nghiệp';
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Tư vấn, cung cấp và chuyển đổi thiết bị điện công nghiệp.'} />
    </Helmet>
  );
}

export default SEO;
