// Footer — simple footer

const footerStyle = {
  background: 'var(--maroon-dark)',
  color: 'rgba(253,246,236,0.7)',
  padding: '2.5rem 1.5rem 1.5rem',
  marginTop: 'auto',
};

const innerStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
};

const bottomStyle = {
  borderTop: '1px solid rgba(201,168,76,0.2)',
  paddingTop: '1.25rem',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.8rem',
};

export default function Footer() {
  return (
    <footer style={footerStyle} className="motif-border">
      <div style={innerStyle}>

        {/* Museum Information */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.75rem',
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>🏛️</span>

            <span
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--gold)',
                fontSize: '1.1rem',
                fontWeight: 700,
              }}
            >
              Indian Heritage Virtual Gallery
            </span>
          </div>

          <p
            style={{
              fontSize: '0.83rem',
              maxWidth: '500px',
              lineHeight: 1.7,
              margin: '0 auto',
            }}
          >
            Preserving and celebrating India's rich cultural
            heritage through an immersive virtual gallery experience.
          </p>
        </div>

        {/* Copyright */}
        <div style={bottomStyle}>
          <span>
            © {new Date().getFullYear()} Indian Heritage Virtual Gallery
          </span>
        </div>

      </div>
    </footer>
  );
}