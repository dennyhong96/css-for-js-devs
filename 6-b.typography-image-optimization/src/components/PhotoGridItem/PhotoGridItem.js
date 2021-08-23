import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Picture>
          <source
            srcSet={`${src}.jpg 1x, ${src}@2x.jpg 2x, ${src}@3x.jpg 3x`}
          />
          <source
            srcSet={`${src}.avif 1x, ${src}@2x.avif 2x, ${src}@3x.avif 3x`}
          />
          <Image src={`${src}.jpg`} alt={alt} />
        </Picture>
      </Anchor>

      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Picture = styled.picture`
  display: block;
  height: 0px;
  padding-bottom: 100%;
  position: relative;
  margin-bottom: 8px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  width: 100%;
  border-radius: 2px;
`;

const Tags = styled.ul`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px 0;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  border-radius: 1px;

  &:not(:last-of-type) {
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
