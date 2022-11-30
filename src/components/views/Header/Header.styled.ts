import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px #f0f1f2;
  width: 100%;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
  max-width: 363px;
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const AvatarWrapper = styled(Image)`
  border-radius: 50%;
`;
