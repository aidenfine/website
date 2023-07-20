export const BlogCard = ({ title, description, img, tagOne, tagTwo, tagThree, onClick }) => {
  return (
    <div class="max-w-sm mt-8 rounded overflow-hidden shadow-lg cursor-pointer " onClick={onClick}>
      <img class="w-full" src={img} alt="img" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base">{description}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tagOne}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tagTwo}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tagThree}
        </span>
      </div>
    </div>
  );
};
