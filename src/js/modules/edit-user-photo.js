function editUserPhoto() {
  const updateAvatarBtn = document.querySelector(
    'button[data-avatar="update"]'
  );

  if (updateAvatarBtn) {
    const userPhotoBlock = document.getElementById('user-photo-block');
    const editPhotoBlock = document.getElementById('edit-photo-block');

    updateAvatarBtn.addEventListener('click', () => {
      userPhotoBlock.classList.toggle('hidden');
      editPhotoBlock.classList.toggle('hidden');
    });
  }
}

export default editUserPhoto;
